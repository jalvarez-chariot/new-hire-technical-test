using System.Net;
using System.Threading.Tasks;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace Chariot.Api
{
    public class GetCustomerData
    {
        private readonly ILogger _logger;

        public GetCustomerData(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<GetCustomerData>();
        }

        [Function("GetCustomerData")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var response = req.CreateResponse(HttpStatusCode.OK);
            response.Headers.Add("Content-Type", "text/plain; charset=utf-8");
            await response.WriteStringAsync("API is working!");

            return response;
        }
    }
}