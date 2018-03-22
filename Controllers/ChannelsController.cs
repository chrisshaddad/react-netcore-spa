using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactDemoSPA.Models;

namespace ReactDemoSPA.Controllers
{
    [Route("api/[controller]")]
    public class ChannelsController : Controller
    {
        public static List<Channel> ListOfChannels = new List<Channel>
        {
            new Channel(){Id=1,Tag="Tag1",Name="Name1",Status="Active",CreatedDate=DateTime.Now},
            new Channel(){Id=2,Tag="Tag2",Name="Name2",Status="Active",CreatedDate=DateTime.Now},
            new Channel(){Id=3,Tag="Tag3",Name="Name3",Status="InActive",CreatedDate=DateTime.Now},
            new Channel(){Id=4,Tag="Tag4",Name="Name4",Status="Active",CreatedDate=DateTime.Now},
            new Channel(){Id=5,Tag="Tag5",Name="Name5",Status="InActive",CreatedDate=DateTime.Now},
            new Channel(){Id=6,Tag="Tag6",Name="Name6",Status="Active",CreatedDate=DateTime.Now},
        };

        [HttpGet("[action]")]
        public List<Channel> GetAllChannels(){
            return ListOfChannels;
        }

    }
}