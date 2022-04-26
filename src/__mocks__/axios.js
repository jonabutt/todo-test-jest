const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'John',
          last: 'Buttigieg',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/67.jpg',
        },
        login: {
          username: 'TheBIGGoat',
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
