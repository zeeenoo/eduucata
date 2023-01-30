axios.get('https://people.googleapis.com/v1/people/me', 
   {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
   })
  .then(res => {
    const { displayName, photos } = res.data;
    const photoUrl = photos[0].url;
    console.log(displayName, photoUrl);
  })
  .catch(error => {
    console.error(error);
  });
