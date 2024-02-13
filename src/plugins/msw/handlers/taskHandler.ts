import { http, HttpResponse, delay } from 'msw';
import { IUser } from '@/api/type';

export const users: IUser[] = [
  {
    id: 1,
    username: 'admin',
    company: 'isocked.com',
    role: 'admin',
    country: 'China',
    contact: '(479) 232-9151',
    email: 'wangqiangshen@gmail.com',
    status: 'active',
    billing: 'Auto Debit',
    avatar: '/assets/images/users/avatar-1.jpg',
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTB9.txWLuN4QT5PqTtgHmlOiNerIu5Do51PpYOiZutkyXYg'
  },
  {
    id: 2,
    username: 'Halsey Redmore',
    company: 'Skinder PVT LTD',
    role: 'author',
    country: 'Albania',
    contact: '(472) 607-9137',
    email: 'hredmore1@imgur.com',
    status: 'pending',
    avatar: '/assets/images/avatars/avatar-2.png',
    billing: 'Manual - Paypal'
  },
  {
    id: 3,
    username: 'Marjory Sicely',
    company: 'Oozz PVT LTD',
    role: 'maintainer',
    country: 'Russia',
    contact: '(321) 264-4599',
    email: 'msicely2@who.int',
    status: 'active',
    avatar: '/assets/images/avatars/avatar-1.png',
    billing: 'Manual - Cash'
  },
  {
    id: 4,
    username: 'Cyrill Risby',
    company: 'Oozz PVT LTD',
    role: 'maintainer',
    country: 'China',
    contact: '(923) 690-6806',
    email: 'crisby3@wordpress.com',
    status: 'inactive',
    avatar: '/assets/images/avatars/avatar-3.png',
    billing: 'Manual - Credit Card'
  },
  {
    id: 5,
    username: 'Maggy Hurran',
    company: 'Aimbo PVT LTD',
    role: 'subscriber',
    country: 'Pakistan',
    contact: '(669) 914-1078',
    email: 'mhurran4@yahoo.co.jp',
    status: 'pending',
    avatar: '/assets/images/avatars/avatar-1.png',
    billing: 'Auto Debit'
  },
  {
    id: 6,
    username: 'Silvain Halstead',
    company: 'Jaxbean PVT LTD',
    role: 'author',
    country: 'China',
    contact: '(958) 973-3093',
    email: 'shalstead5@shinystat.com',
    status: 'active',
    avatar: ' ',
    billing: 'Manual - Cash'
  },
  {
    id: 7,
    username: 'Breena Gallemore',
    company: 'Jazzy PVT LTD',
    role: 'subscriber',
    country: 'Canada',
    contact: '(825) 977-8152',
    email: 'bgallemore6@boston.com',
    status: 'pending',
    avatar: ' ',
    billing: 'Manual - Cash'
  },
  {
    id: 8,
    username: 'Kathryne Liger',
    company: 'Pixoboo PVT LTD',
    role: 'author',
    country: 'France',
    contact: '(187) 440-0934',
    email: 'kliger7@vinaora.com',
    status: 'pending',
    avatar: '/assets/images/avatars/avatar-4.png',
    billing: 'Manual - Cash'
  },
  {
    id: 9,
    username: 'Franz Scotfurth',
    company: 'Tekfly PVT LTD',
    role: 'subscriber',
    country: 'China',
    contact: '(978) 146-5443',
    email: 'fscotfurth8@dailymotion.com',
    status: 'pending',
    avatar: '/assets/images/avatars/avatar-2.png',
    billing: 'Manual - Cash'
  },
  {
    id: 10,
    username: 'Jillene Bellany',
    company: 'Gigashots PVT LTD',
    role: 'maintainer',
    country: 'Jamaica',
    contact: '(589) 284-6732',
    email: 'jbellany9@kickstarter.com',
    status: 'inactive',
    avatar: '/assets/images/avatars/avatar-5.png',
    billing: 'Manual - Cash'
  },
  {
    id: 11,
    username: 'Jonah Wharlton',
    company: 'Eare PVT LTD',
    role: 'subscriber',
    country: 'United States',
    contact: '(176) 532-6824',
    email: 'jwharltona@oakley.com',
    status: 'inactive',
    avatar: '/assets/images/avatars/avatar-6.png',
    billing: 'Manual - Cash'
  },
  {
    id: 12,
    username: 'Seth Hallam',
    company: 'Yakitri PVT LTD',
    role: 'subscriber',
    country: 'Peru',
    contact: '(234) 464-0600',
    email: 'shallamb@hugedomains.com',
    status: 'pending',
    avatar: '/assets/images/avatars/avatar-7.png',
    billing: 'Manual - Cash'
  },
  {
    id: 13,
    username: 'Yoko Pottie',
    company: 'Leenti PVT LTD',
    role: 'subscriber',
    country: 'Philippines',
    contact: '(907) 284-5083',
    email: 'ypottiec@privacy.gov.au',
    status: 'inactive',
    avatar: '/assets/images/avatars/avatar-8.png',
    billing: 'Manual - Cash'
  },
  {
    id: 14,
    username: 'Maximilianus Krause',
    company: 'Digitube PVT LTD',
    role: 'author',
    country: 'Democratic Republic of the Congo',
    contact: '(167) 135-7392',
    email: 'mkraused@stanford.edu',
    status: 'active',
    avatar: ' ',
    billing: 'Manual - Cash'
  },
  {
    id: 15,
    username: 'Zsazsa McCleverty',
    company: 'Kaymbo PVT LTD',
    role: 'maintainer',
    country: 'France',
    contact: '(317) 409-6565',
    email: 'zmcclevertye@soundcloud.com',
    status: 'active',
    avatar: ' ',
    billing: 'Manual - Cash'
  },
  {
    id: 16,
    username: 'Bentlee Emblin',
    company: 'Yambee PVT LTD',
    role: 'author',
    country: 'Spain',
    contact: '(590) 606-1056',
    email: 'bemblinf@wired.com',
    status: 'active',
    avatar: ' ',
    billing: 'Manual - Cash'
  },
  {
    id: 17,
    username: 'Brockie Myles',
    company: 'Wikivu PVT LTD',
    role: 'maintainer',
    country: 'Poland',
    contact: '(553) 225-9905',
    email: 'bmylesg@amazon.com',
    status: 'active',
    avatar: ' ',
    billing: 'Manual - Cash'
  },
  {
    id: 18,
    username: 'Bertha Biner',
    company: 'Twinte PVT LTD',
    role: 'editor',
    country: 'Yemen',
    contact: '(901) 916-9287',
    email: 'bbinerh@mozilla.com',
    status: 'active',
    avatar: 'avatar7',
    billing: 'Manual - Cash'
  },
  {
    id: 19,
    username: 'Travus Bruntjen',
    company: 'Cogidoo PVT LTD',
    role: 'admin',
    country: 'France',
    contact: '(524) 586-6057',
    email: 'tbruntjeni@sitemeter.com',
    status: 'active',
    avatar: ' ',
    billing: 'Auto Debit'
  },
  {
    id: 20,
    username: 'Wesley Burland',
    company: 'Bubblemix PVT LTD',
    role: 'editor',
    country: 'Honduras',
    contact: '(569) 683-1292',
    email: 'wburlandj@uiuc.edu',
    status: 'inactive',
    avatar: '/assets/images/avatars/avatar-8.png',
    billing: 'Manual - Cash'
  },
  {
    id: 21,
    username: 'Selina Kyle',
    company: 'Wayne Enterprises',
    role: 'admin',
    country: 'USA',
    contact: '(829) 537-0057',
    email: 'irena.dubrovna@wayne.com',
    status: 'active',
    avatar: '/assets/images/avatars/avatar-6.png',
    billing: 'Manual - Cash'
  },
  {
    id: 22,
    username: 'Jameson Lyster',
    company: 'Quaxo PVT LTD',
    role: 'editor',
    country: 'Ukraine',
    contact: '(593) 624-0222',
    email: 'jlysterl@guardian.co.uk',
    status: 'inactive',
    avatar: '/assets/images/avatars/avatar-9.png',
    billing: 'Auto Debit'
  },
  {
    id: 23,
    username: 'Kare Skitterel',
    company: 'Ainyx PVT LTD',
    role: 'maintainer',
    country: 'Poland',
    contact: '(254) 845-4107',
    email: 'kskitterelm@ainyx.com',
    status: 'pending',
    avatar: '/assets/images/avatars/avatar-3.png',
    billing: 'Manual - Cash'
  },
  {
    id: 24,
    username: 'Cleavland Hatherleigh',
    company: 'Flipopia PVT LTD',
    role: 'admin',
    country: 'Brazil',
    contact: '(700) 783-7498',
    email: 'chatherleighn@washington.edu',
    status: 'pending',
    avatar: '/assets/images/avatars/avatar-2.png',
    billing: 'Manual - Cash'
  },
  {
    id: 25,
    username: 'Adeline Micco',
    company: 'Topicware PVT LTD',
    role: 'admin',
    country: 'France',
    contact: '(227) 598-1841',
    email: 'amiccoo@whitehouse.gov',
    status: 'pending',
    avatar: ' ',
    billing: 'Manual - Cash'
  },
  {
    id: 26,
    username: 'Hugh Hasson',
    company: 'Skinix PVT LTD',
    role: 'admin',
    country: 'China',
    contact: '(582) 516-1324',
    email: 'hhassonp@bizjournals.com',
    status: 'inactive',
    avatar: '/assets/images/avatars/avatar-4.png',
    billing: 'Auto Debit'
  },
  {
    id: 27,
    username: 'Germain Jacombs',
    company: 'Youopia PVT LTD',
    role: 'editor',
    country: 'Zambia',
    contact: '(137) 467-5393',
    email: 'gjacombsq@jigsy.com',
    status: 'active',
    avatar: '/assets/images/avatars/avatar-5.png',
    billing: 'Auto Debit'
  },
  {
    id: 28,
    username: 'Bree Kilday',
    company: 'Jetpulse PVT LTD',
    role: 'maintainer',
    country: 'Portugal',
    contact: '(412) 476-0854',
    email: 'bkildayr@mashable.com',
    status: 'active',
    avatar: ' ',
    billing: 'Auto Debit'
  },
  {
    id: 29,
    username: 'Candice Pinyon',
    company: 'Kare PVT LTD',
    role: 'maintainer',
    country: 'Sweden',
    contact: '(170) 683-1520',
    email: 'cpinyons@behance.net',
    status: 'active',
    avatar: '/assets/images/avatars/avatar-7.png',
    billing: 'Auto Debit'
  },
  {
    id: 30,
    username: 'Isabel Mallindine',
    company: 'Voomm PVT LTD',
    role: 'subscriber',
    country: 'Slovenia',
    contact: '(332) 803-1983',
    email: 'imallindinet@shinystat.com',
    status: 'pending',
    avatar: ' ',
    billing: 'Auto Debit'
  },
  {
    id: 31,
    username: 'Gwendolyn Meineken',
    company: 'Oyondu PVT LTD',
    role: 'admin',
    country: 'Moldova',
    contact: '(551) 379-7460',
    email: 'gmeinekenu@hc360.com',
    status: 'pending',
    avatar: '/assets/images/avatars/avatar-1.png',
    billing: 'Auto Debit'
  },
  {
    id: 32,
    username: 'Rafaellle Snowball',
    company: 'Fivespan PVT LTD',
    role: 'editor',
    country: 'Philippines',
    contact: '(974) 829-0911',
    email: 'rsnowballv@indiegogo.com',
    status: 'pending',
    avatar: '/assets/images/avatars/avatar-8.png',
    billing: 'Auto Debit'
  },
  {
    id: 33,
    username: 'Rochette Emer',
    company: 'Thoughtworks PVT LTD',
    role: 'admin',
    country: 'North Korea',
    contact: '(841) 889-3339',
    email: 'remerw@blogtalkradio.com',
    status: 'active',
    avatar: '/assets/images/avatars/avatar-5.png',
    billing: 'Manual - Paypal'
  },
  {
    id: 34,
    username: 'Ophelie Fibbens',
    company: 'Jaxbean PVT LTD',
    role: 'subscriber',
    country: 'Indonesia',
    contact: '(764) 885-7351',
    email: 'ofibbensx@booking.com',
    status: 'active',
    avatar: '/assets/images/avatars/avatar-4.png',
    billing: 'Manual - Paypal'
  },
  {
    id: 35,
    username: 'Stephen MacGilfoyle',
    company: 'Browseblab PVT LTD',
    role: 'maintainer',
    country: 'Japan',
    contact: '(350) 589-8520',
    email: 'smacgilfoyley@bigcartel.com',
    status: 'pending',
    avatar: ' ',
    billing: 'Manual - Paypal'
  },
  {
    id: 36,
    username: 'Bradan Rosebotham',
    company: 'Agivu PVT LTD',
    role: 'subscriber',
    country: 'Belarus',
    contact: '(882) 933-2180',
    email: 'brosebothamz@tripadvisor.com',
    status: 'inactive',
    avatar: ' ',
    billing: 'Manual - Paypal'
  },
  {
    id: 37,
    username: 'Skip Hebblethwaite',
    company: 'Katz PVT LTD',
    role: 'admin',
    country: 'Canada',
    contact: '(610) 343-1024',
    email: 'shebblethwaite10@arizona.edu',
    status: 'inactive',
    avatar: '/assets/images/avatars/avatar-1.png',
    billing: 'Manual - Paypal'
  },
  {
    id: 38,
    username: 'Moritz Piccard',
    company: 'Twitternation PVT LTD',
    role: 'maintainer',
    country: 'Croatia',
    contact: '(365) 277-2986',
    email: 'mpiccard11@vimeo.com',
    status: 'inactive',
    avatar: '/assets/images/avatars/avatar-8.png',
    billing: 'Auto Debit'
  },
  {
    id: 39,
    username: 'Tyne Widmore',
    company: 'Yombu PVT LTD',
    role: 'subscriber',
    country: 'Finland',
    contact: '(531) 731-0928',
    email: 'twidmore12@bravesites.com',
    status: 'pending',
    avatar: ' ',
    billing: 'Manual - Credit Card'
  },
  {
    id: 40,
    username: 'Florenza Desporte',
    company: 'Kamba PVT LTD',
    role: 'author',
    country: 'Ukraine',
    contact: '(312) 104-2638',
    email: 'fdesporte13@omniture.com',
    status: 'active',
    avatar: '/assets/images/avatars/avatar-6.png',
    billing: 'Manual - Credit Card'
  },
  {
    id: 41,
    username: 'Edwina Baldetti',
    company: 'Dazzlesphere PVT LTD',
    role: 'maintainer',
    country: 'Haiti',
    contact: '(315) 329-3578',
    email: 'ebaldetti14@theguardian.com',
    status: 'pending',
    avatar: ' ',
    billing: 'Manual - Cash'
  },
  {
    id: 42,
    username: 'Benedetto Rossiter',
    company: 'Mybuzz PVT LTD',
    role: 'editor',
    country: 'Indonesia',
    contact: '(323) 175-6741',
    email: 'brossiter15@craigslist.org',
    status: 'inactive',
    avatar: ' ',
    billing: 'Manual - Credit Card'
  },
  {
    id: 43,
    username: 'Micaela McNirlan',
    company: 'Tambee PVT LTD',
    role: 'admin',
    country: 'Indonesia',
    contact: '(242) 952-0916',
    email: 'mmcnirlan16@hc360.com',
    status: 'inactive',
    avatar: ' ',
    billing: 'Manual - Credit Card'
  },
  {
    id: 44,
    username: 'Vladamir Koschek',
    company: 'Centimia PVT LTD',
    role: 'author',
    country: 'Guatemala',
    contact: '(531) 758-8335',
    email: 'vkoschek17@abc.net.au',
    status: 'active',
    avatar: ' ',
    billing: 'Auto Debit'
  },
  {
    id: 45,
    username: 'Corrie Perot',
    company: 'Flipopia PVT LTD',
    role: 'subscriber',
    country: 'China',
    contact: '(659) 385-6808',
    email: 'cperot18@goo.ne.jp',
    status: 'pending',
    avatar: '/assets/images/avatars/avatar-3.png',
    billing: 'Manual - Paypal'
  },
  {
    id: 46,
    username: 'Saunder Offner',
    company: 'Skalith PVT LTD',
    role: 'maintainer',
    country: 'Poland',
    contact: '(200) 586-2264',
    email: 'soffner19@mac.com',
    status: 'pending',
    avatar: ' ',
    billing: 'Auto Debit'
  },
  {
    id: 47,
    username: 'Karena Courtliff',
    company: 'Feedfire PVT LTD',
    role: 'admin',
    country: 'China',
    contact: '(478) 199-0020',
    email: 'kcourtliff1a@bbc.co.uk',
    status: 'active',
    avatar: '/assets/images/avatars/avatar-1.png',
    billing: 'Manual - Credit Card'
  },
  {
    id: 48,
    username: 'Onfre Wind',
    company: 'Thoughtmix PVT LTD',
    role: 'admin',
    country: 'Ukraine',
    contact: '(344) 262-7270',
    email: 'owind1b@yandex.ru',
    status: 'pending',
    avatar: ' ',
    billing: 'Manual - Credit Card'
  },
  {
    id: 49,
    username: 'Paulie Durber',
    company: 'Babbleblab PVT LTD',
    role: 'subscriber',
    country: 'Sweden',
    contact: '(694) 676-1275',
    email: 'pdurber1c@gov.uk',
    status: 'inactive',
    avatar: ' ',
    billing: 'Auto Debit'
  },
  {
    id: 50,
    username: 'Beverlie Krabbe',
    company: 'Kaymbo PVT LTD',
    role: 'editor',
    country: 'China',
    contact: '(397) 294-5153',
    email: 'bkrabbe1d@home.pl',
    status: 'active',
    avatar: '/assets/images/avatars/avatar-2.png',
    billing: 'Manual - Credit Card'
  }
];

export const findUserById = (id) => {
  return users.find((item) => item.id === id);
};

export const handlerUser = [
  // get current user info
  http.get('/api/me', async () => {
    const data = users;
    return HttpResponse.json(data[0], { status: 200 });
  }),

  http.get('/api/user', async ({ request }) => {
    let data = users;
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('filter[role]') ?? null;
    const status = searchParams.get('filter[status]') ?? null;
    if (role) {
      console.log(role);

      data = users.filter((item) => {
        return item.role === role;
      });
    }
    if (status) {
      data = users.filter((item) => {
        return item.status === status;
      });
    }
    await delay(2000);
    return HttpResponse.json(data, { status: 200 });
  }),

  http.get('/api/user/:id', async ({ params }) => {
    const data = findUserById(params.id);
    console.log(`Captured a "DELETE /posts/${params.id}" request`);
    return HttpResponse.json(data, { status: 200 });
  })
];
