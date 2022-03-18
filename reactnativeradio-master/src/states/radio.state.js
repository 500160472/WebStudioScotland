const radioState = {
  // This is where you input your list of radios in case you decide they will be fixed (static)
  list: [
    {
      id: '0',
      url: 'https://antenaone.crossradio.com.br/stream/1;',
      name: 'Antena 1',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91uv9wSzsNL.png',
    },
    {
      id: '1',
      url: 'https://9554.brasilstream.com.br/stream?1617720386258',
      name: 'Rádio 98',
      image: 'https://98live.com.br/share.png',
    },
  ],
  selected: null,
  volume: 0,
};

export default radioState;
