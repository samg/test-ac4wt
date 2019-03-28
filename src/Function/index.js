exports.handler = async message => {
  console.log(message);

  const response = {
    statusCode: '204',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: `Success\n${JSON.stringify(message, undefined, 2)}`
  };
  return response;
};
