const adminAuthorization = (req,res,next) => {
   const token='xyz';
   var flg = token === 'xyz'
   if(!flg)
   {
       res.status(401).send('unauthorized admin');
   }
   else{
     next();
   }
}

module.exports = {
  adminAuthorization
}

