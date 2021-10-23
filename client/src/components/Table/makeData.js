const newVideo = (data) => {
    return {
      seller:data.seller,
      humidity:data.humidity,
      temperature:data.temperature,
      buyer: data.buyer,
      date:data.Date,
    }
}

export default function makeData(data) {
  const makeDataLevel = (depth = 0) => {
    const lens=data.length;
    return data.map(d => {
      return {
        ...newVideo(d),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
