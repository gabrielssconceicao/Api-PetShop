const ok = (data) => {
  return {
    body: data,
    status: 200,
  };
};
const created = (data) => {
  return {
    body: data,
    status: 201,
  };
};
const noContent = (data) => {
  return {
    body: null,
    status: 204,
  };
};
const badRequest = (data) => {
  return {
    body: {
      error: data,
    },
    status: 400,
  };
};
const notFound = (data) => {
  return {
    body: {
      error: data,
    },
    status: 404,
  };
};
const internalServerError = (data) => {
  return {
    body: {
      error: data,
    },
    status: 500,
  };
};

module.exports = {
  ok,
  created,
  noContent,
  badRequest,
  notFound,
  internalServerError,
};
