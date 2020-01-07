using Amazon.Runtime;
using Amazon.SimpleEmail;
using Amazon.SimpleEmail.Model;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StudentPortal.Util
{
    public class EmailSender : IEmailSender
    {
        private readonly IConfiguration _configuration;
        public EmailSender(IConfiguration configuration)
            => _configuration = configuration;

        public async Task SendEmailAsync(string recipientEmail, string subject, string htmlMessage)
        {
            var senderEmail = _configuration.GetSection("emailSettings:senderEmail").Value;
            var accessKey = _configuration.GetSection("emailSettings:accessKey").Value;
            var secretKey = _configuration.GetSection("emailSettings:secretKey").Value;

            // Reference: https://docs.aws.amazon.com/sdkfornet/v3/apidocs/items/SimpleEmail/MSimpleEmailServiceSendEmailSendEmailRequest.html
            var emailRequest = (new SendEmailRequest
            {
                Destination = new Destination
                {
                    ToAddresses = new List<string> { recipientEmail }
                },

                Message = new Message
                {
                    Body = new Body
                    {
                        Html = new Content
                        {
                            Charset = "UTF-8",
                            Data = htmlMessage
                        }
                    },

                    Subject = new Content
                    {
                        Charset = "UTF-8",
                        Data = subject
                    }
                },
               
                Source = senderEmail,
            });

            AWSCredentials credential = new BasicAWSCredentials(accessKey, secretKey);
            Amazon.RegionEndpoint region = Amazon.RegionEndpoint.USEast1; // North Virginia

            using AmazonSimpleEmailServiceClient client = new AmazonSimpleEmailServiceClient(credential, region);
            await client.SendEmailAsync(emailRequest);
        }
    }
}