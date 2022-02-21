// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const key = context.params.query.key;
    if(!key) throw new Error('Key tidak valid');
    const d = await context.app.service('users').find({ query: { key } });
    const user = d.data[0];
    if (!user) {
      throw new Error('Key tidak ditemukan');
    }
    context.params.query.userId = user.id;
    delete context.params.query.key;
    return context;
  };
};
