exports.handler = async message => {
  console.log(message);

  const response = {
    statusCode: '200',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: `Success\n${JSON.stringify(message, undefined, 2)}`
  };
  return response;
};
