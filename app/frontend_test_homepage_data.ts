interface LoremObject {
  videos: string[];
  featuredJams: Jam[];
  jams: Jam[];
  games: Game[];
}

export interface Jam {
  updateAt: number;
  createAt: number;
  id: number;
  startTime: number;
  endTime: number;
  resultTime: number;
  name: string;
  slug: string;
  status: number;
  description: string;
  details: string;
  thumbnailImageUrl: string;
  priority: number;
  coverImageUrl: string;
  hostProfiles: Profile[];
  submissionCount: number;
  joinedCount: number;
}

export interface Game {
  updateAt: number;
  createAt: number;
  id: number;
  userId: number;
  jamId: number;
  name: string;
  description: string;
  genre: string;
  thumbnailImageUrl: string | null;
  price: number;
  creatorProfile: Profile;
  reviewCount: number;
  downloadCount: number;
  screenshots: string[];
  files: GameFile[];
  rating: number;
}

interface Profile {
  username: string;
  avatarUrl: string;
  socialUrls?: string | null;
}

interface GameFile {
  updateAt: number;
  createAt: number;
  id: number;
  gameId: number;
  type: number;
  meta: string | null;
  url: string;
}

export const allData: LoremObject = {
  videos: ["https://assets.gamejam.co/platform/gamejam.mp4"],
  featuredJams: [
    {
      updateAt: 1690000000000,
      createAt: 1690000000000,
      id: 3,
      startTime: 1700000000000,
      endTime: 1705000000000,
      resultTime: 1705100000000,
      name: "Featured Jam 1",
      slug: "featured-1",
      status: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies tempus libero vel volutpat. Nunc.",
      details: "item-ed",
      thumbnailImageUrl: "https://picsum.photos/600/300",
      priority: 0,
      coverImageUrl: "https://picsum.photos/1200/600",
      hostProfiles: [
        {
          username: "Gamejammer",
          avatarUrl: "https://picsum.photos/300/300",
        },
      ],
      submissionCount: 1000,
      joinedCount: 1500,
    },
    {
      updateAt: 1690000000000,
      createAt: 1690000000000,
      id: 3,
      startTime: 1700000000000,
      endTime: 1705000000000,
      resultTime: 1705100000000,
      name: "Featured Jam 2",
      slug: "featured-2",
      status: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper suscipit erat, ac venenatis libero.",
      details: "item-ed",
      thumbnailImageUrl: "https://picsum.photos/600/300",
      priority: 0,
      coverImageUrl: "https://picsum.photos/1200/600",
      hostProfiles: [
        {
          username: "Gamejammer",
          avatarUrl: "https://picsum.photos/300/300",
        },
      ],
      submissionCount: 1000,
      joinedCount: 1500,
    },
    {
      updateAt: 1690000000000,
      createAt: 1690000000000,
      id: 3,
      startTime: 1700000000000,
      endTime: 1705000000000,
      resultTime: 1705100000000,
      name: "Featured Jam 3",
      slug: "featured-3",
      status: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend quam et justo imperdiet imperdiet.",
      details: "item-ed",
      thumbnailImageUrl: "https://picsum.photos/600/300",
      priority: 0,
      coverImageUrl: "https://picsum.photos/1200/600",
      hostProfiles: [
        {
          username: "Gamejammer",
          avatarUrl: "https://picsum.photos/300/300",
        },
      ],
      submissionCount: 1000,
      joinedCount: 1500,
    },
  ],
  jams: [
    {
      updateAt: 1690000000000,
      createAt: 1690000000000,
      id: 3,
      startTime: 1700000000000,
      endTime: 1701000000000,
      resultTime: 1701100000000,
      name: "Jam 1",
      slug: "jam-1",
      status: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque leo velit, vehicula vitae felis sit",
      details: "item-ed",
      thumbnailImageUrl: "https://picsum.photos/600/300",
      priority: 0,
      coverImageUrl: "https://picsum.photos/1200/600",
      hostProfiles: [
        {
          username: "Gamejammer A",
          avatarUrl: "https://picsum.photos/300/300",
        },
      ],
      submissionCount: 50,
      joinedCount: 100,
    },
    {
      updateAt: 1690000000000,
      createAt: 1690000000000,
      id: 4,
      startTime: 1700000000000,
      endTime: 1702000000000,
      resultTime: 1702100000000,
      name: "Jam 2",
      slug: "jam-2",
      status: 1,
      description:
        "Donec eu ligula lacus. Duis vehicula sollicitudin aliquam. Maecenas et pulvinar felis, sed lacinia felis.",
      details: "item-ed",
      thumbnailImageUrl: "https://picsum.photos/600/300",
      priority: 0,
      coverImageUrl: "https://picsum.photos/1200/600",
      hostProfiles: [
        {
          username: "Gamejammer B",
          avatarUrl: "https://picsum.photos/300/300",
        },
      ],
      submissionCount: 50,
      joinedCount: 100,
    },
    {
      updateAt: 1690000000000,
      createAt: 1690000000000,
      id: 4,
      startTime: 1700000000000,
      endTime: 1703000000000,
      resultTime: 1703100000000,
      name: "Jam 3",
      slug: "jam-3",
      status: 7,
      description:
        "Maecenas sed neque finibus, mattis quam sed, pretium diam. Vestibulum tincidunt semper diam, ac tempus",
      details: "item-ed",
      thumbnailImageUrl: "https://picsum.photos/600/300",
      priority: 0,
      coverImageUrl: "https://picsum.photos/1200/600",
      hostProfiles: [
        {
          username: "Gamejammer C",
          avatarUrl: "https://picsum.photos/300/300",
        },
      ],
      submissionCount: 50,
      joinedCount: 100,
    },
    {
      updateAt: 1690000000000,
      createAt: 1700000000000,
      id: 4,
      startTime: 1700000000000,
      endTime: 1704000000000,
      resultTime: 1704100000000,
      name: "Jam 4",
      slug: "jam-4",
      status: 6,
      description:
        "Sed et tempor velit. Proin ullamcorper justo vitae nisl varius, eu imperdiet velit ornare. Proin.",
      details: "item-ed",
      thumbnailImageUrl: "https://picsum.photos/600/300",
      priority: 0,
      coverImageUrl: "https://picsum.photos/1200/600",
      hostProfiles: [
        {
          username: "Gamejammer D",
          avatarUrl: "https://picsum.photos/300/300",
        },
      ],
      submissionCount: 50,
      joinedCount: 100,
    },
    {
      updateAt: 1690000000000,
      createAt: 1690000000000,
      id: 5,
      startTime: 1700000000000,
      endTime: 1705000000000,
      resultTime: 1705100000000,
      name: "Jam 5",
      slug: "jam-5",
      status: 1,
      description:
        "Integer eu tellus lorem. Sed eu posuere augue. Integer vitae varius elit. Ut sed urna.",
      details: "item-ed",
      thumbnailImageUrl: "https://picsum.photos/600/300",
      priority: 0,
      coverImageUrl: "https://picsum.photos/1200/600",
      hostProfiles: [
        {
          username: "Gamejammer E",
          avatarUrl: "https://picsum.photos/300/300",
        },
      ],
      submissionCount: 50,
      joinedCount: 100,
    },
  ],
  games: [
    {
      updateAt: 1690000000000,
      createAt: 1690000000000,
      id: 23,
      userId: 1,
      jamId: 6,
      name: "Game 1",
      description:
        "Aliquam ut est ac ligula mollis auctor in tristique urna. Aenean finibus lacus ut nunc.",
      genre: "Action",
      thumbnailImageUrl: null,
      price: 3.99,
      creatorProfile: {
        username: "Gamejammer",
        avatarUrl: "",
        socialUrls: null,
      },
      reviewCount: 0,
      downloadCount: 0,
      screenshots: [],
      files: [
        {
          updateAt: 1690000000000,
          createAt: 1690000000000,
          id: 24,
          gameId: 23,
          type: 1,
          meta: null,
          url: "",
        },
      ],
      rating: 4.0,
    },
    {
      updateAt: 1690000000001,
      createAt: 1690000000001,
      id: 121,
      userId: 2,
      jamId: 116,
      name: "Game 2",
      description:
        "Nunc tincidunt, risus vel tempor bibendum, elit nulla mollis lorem, a congue nisl libero et.",
      genre: "Action",
      thumbnailImageUrl: "https://picsum.photos/600/300",
      price: 3.99,
      creatorProfile: {
        username: "Gamejammer",
        avatarUrl: "https://picsum.photos/300/300",
        socialUrls: null,
      },
      reviewCount: 0,
      downloadCount: 0,
      screenshots: [],
      files: [
        {
          updateAt: 1690000000001,
          createAt: 1690000000001,
          id: 124,
          gameId: 121,
          type: 1,
          meta: '{"platform":"Windows","description":"Nunc tincidunt, risus vel tempor bibendum, elit nulla mollis lorem, a congue nisl libero et"}',
          url: "",
        },
      ],
      rating: 4.0,
    },
    {
      updateAt: 1690000000002,
      createAt: 1690000000002,
      id: 121,
      userId: 2,
      jamId: 116,
      name: "Game 3",
      description:
        "Vivamus lacinia diam metus, at auctor tortor elementum eu. Sed sollicitudin, mi id cursus sodales.",
      genre: "Action",
      thumbnailImageUrl: "https://picsum.photos/600/300",
      price: 3.99,
      creatorProfile: {
        username: "Gamejammer",
        avatarUrl: "https://picsum.photos/300/300",
        socialUrls: null,
      },
      reviewCount: 0,
      downloadCount: 0,
      screenshots: [],
      files: [
        {
          updateAt: 1690000000002,
          createAt: 1690000000002,
          id: 124,
          gameId: 121,
          type: 1,
          meta: '{"platform":"Windows","description":"Vivamus lacinia diam metus, at auctor tortor elementum eu. Sed sollicitudin, mi id cursus sodales."}',
          url: "",
        },
      ],
      rating: 4.0,
    },
  ],
};
