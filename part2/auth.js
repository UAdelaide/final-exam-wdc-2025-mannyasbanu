// Authentication middleware
function loginCheck(req, res, next){
  if(req.session && req.session.user) return next();
  res.redirect('/');
}
function roleCheck(role){
  return function(req, res, next){
    if(!req.session.user){
      return res.status(401).redirect('/');
    }
    if(req.session.user.role === role) return next();
    res.status(403).send('Access denied');
  };
}

module.exports = { loginCheck, roleCheck };