import HttpService from "@/lib/http-helper";

export const CreatorsAPI = {
  getCreatorRoles: async (query) =>
    HttpService.get("/api/creator-roles", { query }),
  //   getCreators: async (query) => HttpService.get("/api/creators", { query }),
  getCreators: async () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          count: 28624,
          next: "https://api.rawg.io/api/creators?key=602fecd2b6894f548e7efd5e643a1b79&page=2&page_size=20",
          previous: null,
          results: [
            {
              id: 31,
              name: "Gabe Newell",
              slug: "gabe-newell",
              image:
                "https://media.rawg.io/media/persons/5e5/5e5e064d3475fc3fe49d1d2debb4e36c.jpg",
              image_background:
                "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
              games_count: 24,
              positions: [
                {
                  id: 2,
                  name: "director",
                  slug: "director",
                },
                {
                  id: 5,
                  name: "producer",
                  slug: "producer",
                },
                {
                  id: 7,
                  name: "programmer",
                  slug: "programmer",
                },
              ],
              games: [
                {
                  id: 4200,
                  slug: "portal-2",
                  name: "Portal 2",
                  added: 20521,
                },
                {
                  id: 4291,
                  slug: "counter-strike-global-offensive",
                  name: "Counter-Strike: Global Offensive",
                  added: 18242,
                },
                {
                  id: 13536,
                  slug: "portal",
                  name: "Portal",
                  added: 17489,
                },
                {
                  id: 12020,
                  slug: "left-4-dead-2",
                  name: "Left 4 Dead 2",
                  added: 17359,
                },
                {
                  id: 13537,
                  slug: "half-life-2",
                  name: "Half-Life 2",
                  added: 15820,
                },
                {
                  id: 19710,
                  slug: "half-life-2-episode-one",
                  name: "Half-Life 2: Episode One",
                  added: 11312,
                },
              ],
            },
            {
              id: 37,
              name: "Marc Laidlaw",
              slug: "marc-laidlaw",
              image:
                "https://media.rawg.io/media/persons/da3/da3fc907a3af9e494dc671b0c6348f5c.jpg",
              image_background:
                "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
              games_count: 15,
              positions: [
                {
                  id: 1,
                  name: "writer",
                  slug: "writer",
                },
              ],
              games: [
                {
                  id: 4200,
                  slug: "portal-2",
                  name: "Portal 2",
                  added: 20521,
                },
                {
                  id: 4291,
                  slug: "counter-strike-global-offensive",
                  name: "Counter-Strike: Global Offensive",
                  added: 18242,
                },
                {
                  id: 13536,
                  slug: "portal",
                  name: "Portal",
                  added: 17489,
                },
                {
                  id: 12020,
                  slug: "left-4-dead-2",
                  name: "Left 4 Dead 2",
                  added: 17359,
                },
                {
                  id: 13537,
                  slug: "half-life-2",
                  name: "Half-Life 2",
                  added: 15820,
                },
                {
                  id: 10213,
                  slug: "dota-2",
                  name: "Dota 2",
                  added: 13069,
                },
              ],
            },
            {
              id: 63,
              name: "Robin Walker",
              slug: "robin-walker",
              image:
                "https://media.rawg.io/media/persons/b76/b76df211424e553218ce800f9b1d38f0.png",
              image_background:
                "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
              games_count: 14,
              positions: [
                {
                  id: 6,
                  name: "designer",
                  slug: "designer",
                },
              ],
              games: [
                {
                  id: 4200,
                  slug: "portal-2",
                  name: "Portal 2",
                  added: 20521,
                },
                {
                  id: 4291,
                  slug: "counter-strike-global-offensive",
                  name: "Counter-Strike: Global Offensive",
                  added: 18242,
                },
                {
                  id: 13536,
                  slug: "portal",
                  name: "Portal",
                  added: 17489,
                },
                {
                  id: 12020,
                  slug: "left-4-dead-2",
                  name: "Left 4 Dead 2",
                  added: 17359,
                },
                {
                  id: 11859,
                  slug: "team-fortress-2",
                  name: "Team Fortress 2",
                  added: 13942,
                },
                {
                  id: 19710,
                  slug: "half-life-2-episode-one",
                  name: "Half-Life 2: Episode One",
                  added: 11312,
                },
              ],
            },
            {
              id: 27630,
              name: "David Speyrer",
              slug: "david-speyrer",
              image:
                "https://media.rawg.io/media/persons/513/51388ad8c1db829a2fcb0353560f0f2a.png",
              image_background:
                "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
              games_count: 12,
              positions: [
                {
                  id: 7,
                  name: "programmer",
                  slug: "programmer",
                },
              ],
              games: [
                {
                  id: 4200,
                  slug: "portal-2",
                  name: "Portal 2",
                  added: 20521,
                },
                {
                  id: 13536,
                  slug: "portal",
                  name: "Portal",
                  added: 17489,
                },
                {
                  id: 12020,
                  slug: "left-4-dead-2",
                  name: "Left 4 Dead 2",
                  added: 17359,
                },
                {
                  id: 13537,
                  slug: "half-life-2",
                  name: "Half-Life 2",
                  added: 15820,
                },
                {
                  id: 19710,
                  slug: "half-life-2-episode-one",
                  name: "Half-Life 2: Episode One",
                  added: 11312,
                },
                {
                  id: 19709,
                  slug: "half-life-2-episode-two",
                  name: "Half-Life 2: Episode Two",
                  added: 11207,
                },
              ],
            },
            {
              id: 72,
              name: "Jesper Kyd",
              slug: "jesper-kyd",
              image:
                "https://media.rawg.io/media/persons/2a5/2a502a143225ad0faf1f8319d58fb6c0.jpg",
              image_background:
                "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
              games_count: 49,
              positions: [
                {
                  id: 3,
                  name: "composer",
                  slug: "composer",
                },
              ],
              games: [
                {
                  id: 802,
                  slug: "borderlands-2",
                  name: "Borderlands 2",
                  added: 15774,
                },
                {
                  id: 4828,
                  slug: "borderlands",
                  name: "Borderlands",
                  added: 10031,
                },
                {
                  id: 3543,
                  slug: "borderlands-the-pre-sequel",
                  name: "Borderlands: The Pre-Sequel",
                  added: 9247,
                },
                {
                  id: 45969,
                  slug: "warhammer-vermintide-2",
                  name: "Warhammer: Vermintide 2",
                  added: 8486,
                },
                {
                  id: 58654,
                  slug: "hitman-2",
                  name: "Hitman 2",
                  added: 8042,
                },
                {
                  id: 28568,
                  slug: "assassins-creed-ii",
                  name: "Assassin's Creed II",
                  added: 7957,
                },
              ],
            },
            {
              id: 3,
              name: "Dan Houser",
              slug: "dan-houser",
              image:
                "https://media.rawg.io/media/persons/8ba/8babec5b685ff0be2beee43f3b7b3eb5.jpg",
              image_background:
                "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
              games_count: 29,
              positions: [
                {
                  id: 1,
                  name: "writer",
                  slug: "writer",
                },
                {
                  id: 5,
                  name: "producer",
                  slug: "producer",
                },
                {
                  id: 6,
                  name: "designer",
                  slug: "designer",
                },
              ],
              games: [
                {
                  id: 3498,
                  slug: "grand-theft-auto-v",
                  name: "Grand Theft Auto V",
                  added: 21986,
                },
                {
                  id: 28,
                  slug: "red-dead-redemption-2",
                  name: "Red Dead Redemption 2",
                  added: 16301,
                },
                {
                  id: 4459,
                  slug: "grand-theft-auto-iv",
                  name: "Grand Theft Auto IV",
                  added: 12967,
                },
                {
                  id: 416,
                  slug: "grand-theft-auto-san-andreas",
                  name: "Grand Theft Auto: San Andreas",
                  added: 11757,
                },
                {
                  id: 4514,
                  slug: "la-noire",
                  name: "L.A. Noire",
                  added: 9623,
                },
                {
                  id: 430,
                  slug: "grand-theft-auto-vice-city",
                  name: "Grand Theft Auto: Vice City",
                  added: 9654,
                },
              ],
            },
            {
              id: 70,
              name: "Cris Velasco",
              slug: "cris-velasco",
              image:
                "https://media.rawg.io/media/persons/6ea/6ea06e2ddd6c0190e5134f61d826f30f.jpg",
              image_background:
                "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
              games_count: 57,
              positions: [
                {
                  id: 3,
                  name: "composer",
                  slug: "composer",
                },
              ],
              games: [
                {
                  id: 802,
                  slug: "borderlands-2",
                  name: "Borderlands 2",
                  added: 15774,
                },
                {
                  id: 4828,
                  slug: "borderlands",
                  name: "Borderlands",
                  added: 10031,
                },
                {
                  id: 17540,
                  slug: "injustice-gods-among-us-ultimate-edition",
                  name: "Injustice: Gods Among Us Ultimate Edition",
                  added: 9832,
                },
                {
                  id: 10243,
                  slug: "company-of-heroes-2",
                  name: "Company of Heroes 2",
                  added: 9860,
                },
                {
                  id: 3387,
                  slug: "bloodborne",
                  name: "Bloodborne",
                  added: 8576,
                },
                {
                  id: 480,
                  slug: "resident-evil-7-biohazard",
                  name: "Resident Evil 7: Biohazard",
                  added: 8594,
                },
              ],
            },
            {
              id: 3559,
              name: "Eric Smith",
              slug: "eric-smith",
              image:
                "https://media.rawg.io/media/persons/c94/c9422017814776d6dd51c7af5263062d.png",
              image_background:
                "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
              games_count: 19,
              positions: [
                {
                  id: 1,
                  name: "writer",
                  slug: "writer",
                },
                {
                  id: 4,
                  name: "artist",
                  slug: "artist",
                },
              ],
              games: [
                {
                  id: 4200,
                  slug: "portal-2",
                  name: "Portal 2",
                  added: 20521,
                },
                {
                  id: 4291,
                  slug: "counter-strike-global-offensive",
                  name: "Counter-Strike: Global Offensive",
                  added: 18242,
                },
                {
                  id: 13536,
                  slug: "portal",
                  name: "Portal",
                  added: 17489,
                },
                {
                  id: 12020,
                  slug: "left-4-dead-2",
                  name: "Left 4 Dead 2",
                  added: 17359,
                },
                {
                  id: 19710,
                  slug: "half-life-2-episode-one",
                  name: "Half-Life 2: Episode One",
                  added: 11312,
                },
                {
                  id: 19709,
                  slug: "half-life-2-episode-two",
                  name: "Half-Life 2: Episode Two",
                  added: 11207,
                },
              ],
            },
          ],
        });
      }, 3000)
    ),
  getCreatorById: async (id) => HttpService.get(`/api/creators/${id}`),
  //   getCreatorById: async (id) =>
  //     new Promise((resolve) =>
  //       setTimeout(
  //         () =>
  //           resolve({
  //             id: 31,
  //             name: "Gabe Newell",
  //             slug: "gabe-newell",
  //             image:
  //               "https://media.rawg.io/media/persons/5e5/5e5e064d3475fc3fe49d1d2debb4e36c.jpg",
  //             image_background:
  //               "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
  //             description:
  //               "<p>Gabe Newell is a games director, producer and programmer. Newell has been working with Valve Software, Gearbox Software, NVIDIA Lightspeed Studios and Turtle Rock Studios. Newell&#39;s first published game was Half-Life released in 1998. Next, Gabe Newell worked on Half-Life: Opposing Force taking on the role of director. Later, Newell also was part of the team who developed Gunman Chronicles published by Sierra On-Line for PC. Most lately, Gabe Newell worked on Dota Underlords.</p>",
  //             games_count: 24,
  //             reviews_count: 38871,
  //             rating: "4.16",
  //             rating_top: 5,
  //             updated: "2025-03-19T19:15:43",
  //             positions: [
  //               {
  //                 id: 2,
  //                 name: "director",
  //                 slug: "director",
  //               },
  //               {
  //                 id: 5,
  //                 name: "producer",
  //                 slug: "producer",
  //               },
  //               {
  //                 id: 7,
  //                 name: "programmer",
  //                 slug: "programmer",
  //               },
  //             ],
  //             platforms: {
  //               total: 12,
  //               results: [
  //                 {
  //                   count: 24,
  //                   percent: 26.37,
  //                   platform: {
  //                     id: 1,
  //                     name: "PC",
  //                     slug: "pc",
  //                   },
  //                 },
  //                 {
  //                   count: 19,
  //                   percent: 20.88,
  //                   platform: {
  //                     id: 5,
  //                     name: "Apple Macintosh",
  //                     slug: "mac",
  //                   },
  //                 },
  //                 {
  //                   count: 18,
  //                   percent: 19.78,
  //                   platform: {
  //                     id: 6,
  //                     name: "Linux",
  //                     slug: "linux",
  //                   },
  //                 },
  //                 {
  //                   count: 14,
  //                   percent: 15.39,
  //                   platform: {
  //                     id: 3,
  //                     name: "Xbox",
  //                     slug: "xbox",
  //                   },
  //                 },
  //                 {
  //                   count: 7,
  //                   percent: 7.69,
  //                   platform: {
  //                     id: 2,
  //                     name: "PlayStation",
  //                     slug: "playstation",
  //                   },
  //                 },
  //                 {
  //                   count: 5,
  //                   percent: 5.49,
  //                   platform: {
  //                     id: 8,
  //                     name: "Android",
  //                     slug: "android",
  //                   },
  //                 },
  //                 {
  //                   count: 2,
  //                   percent: 2.2,
  //                   platform: {
  //                     id: 11,
  //                     name: "SEGA",
  //                     slug: "sega",
  //                   },
  //                 },
  //                 {
  //                   count: 1,
  //                   percent: 1.1,
  //                   platform: {
  //                     id: 4,
  //                     name: "iOS",
  //                     slug: "ios",
  //                   },
  //                 },
  //                 {
  //                   count: 1,
  //                   percent: 1.1,
  //                   platform: {
  //                     id: 7,
  //                     name: "Nintendo",
  //                     slug: "nintendo",
  //                   },
  //                 },
  //               ],
  //               count: 9,
  //             },
  //             ratings: [
  //               {
  //                 id: 5,
  //                 title: "exceptional",
  //                 count: 17431,
  //                 percent: 44.84,
  //               },
  //               {
  //                 id: 4,
  //                 title: "recommended",
  //                 count: 14865,
  //                 percent: 38.24,
  //               },
  //               {
  //                 id: 3,
  //                 title: "meh",
  //                 count: 4294,
  //                 percent: 11.05,
  //               },
  //               {
  //                 id: 1,
  //                 title: "skip",
  //                 count: 2281,
  //                 percent: 5.87,
  //               },
  //             ],
  //             timeline: [
  //               {
  //                 year: 1954,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1955,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1956,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1957,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1958,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1959,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1960,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1961,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1962,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1963,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1964,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1965,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1966,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1967,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1968,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1969,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1970,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1971,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1972,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1973,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1974,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1975,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1976,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1977,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1978,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1979,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1980,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1981,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1982,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1983,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1984,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1985,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1986,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1987,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1988,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1989,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1990,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1991,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1992,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1993,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1994,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1995,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1996,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1997,
  //                 count: 0,
  //               },
  //               {
  //                 year: 1998,
  //                 count: 1,
  //               },
  //               {
  //                 year: 1999,
  //                 count: 1,
  //               },
  //               {
  //                 year: 2000,
  //                 count: 3,
  //               },
  //               {
  //                 year: 2001,
  //                 count: 1,
  //               },
  //               {
  //                 year: 2002,
  //                 count: 0,
  //               },
  //               {
  //                 year: 2003,
  //                 count: 0,
  //               },
  //               {
  //                 year: 2004,
  //                 count: 5,
  //               },
  //               {
  //                 year: 2005,
  //                 count: 0,
  //               },
  //               {
  //                 year: 2006,
  //                 count: 1,
  //               },
  //               {
  //                 year: 2007,
  //                 count: 2,
  //               },
  //               {
  //                 year: 2008,
  //                 count: 3,
  //               },
  //               {
  //                 year: 2009,
  //                 count: 1,
  //               },
  //               {
  //                 year: 2010,
  //                 count: 1,
  //               },
  //               {
  //                 year: 2011,
  //                 count: 1,
  //               },
  //               {
  //                 year: 2012,
  //                 count: 1,
  //               },
  //               {
  //                 year: 2013,
  //                 count: 0,
  //               },
  //               {
  //                 year: 2014,
  //                 count: 0,
  //               },
  //               {
  //                 year: 2015,
  //                 count: 0,
  //               },
  //               {
  //                 year: 2016,
  //                 count: 1,
  //               },
  //               {
  //                 year: 2017,
  //                 count: 0,
  //               },
  //               {
  //                 year: 2018,
  //                 count: 1,
  //               },
  //               {
  //                 year: 2019,
  //                 count: 0,
  //               },
  //               {
  //                 year: 2020,
  //                 count: 1,
  //               },
  //               {
  //                 year: 2021,
  //                 count: 0,
  //               },
  //               {
  //                 year: 2022,
  //                 count: 0,
  //               },
  //               {
  //                 year: 2023,
  //                 count: 0,
  //               },
  //               {
  //                 year: 2024,
  //                 count: 0,
  //               },
  //             ],
  //           }),
  //         3000
  //       )
  //     ),
};
