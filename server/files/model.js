const schema = new mongoose.Schema({ name: 'string', from: 'string' });
const Food = mongoose.model('Food', schema);

Tank.create({ size: 'small' }, function (err, small) {
    if (err) return handleError(err);
    // saved!
});
  