const date = new Date()

export default {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  gender: 'Male',
  follows: [2, 3, 6, 8],
  tweets: [
    {
      tweet: "Ew, Grandpa, so gross! You're talking about my Mom! -Summer",
      user: 1,
      date,
    },
    {
      tweet: 'So women like confidence… How convenient… -Jerry',
      user: 1,
      date,
    },
    {
      tweet:
        '❝My body is chrome! My blood is gasoline!❞ ❝Nope, regular blood.❞',
      user: 1,
      date,
    },
    {
      tweet: 'Yo! What up my glipglops!',
      user: 1,
      date,
    },
  ],
}
