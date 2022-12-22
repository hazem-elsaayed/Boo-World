exports.queryBuilder = (filter, sort, query) => {
  if (filter) {
    let filterArray = filter.split(',');
    if (!filterArray.length) query = query.where(filter).ne(null);
    else {
      let tempQuery = { $or: [] };
      filterArray.forEach((filter) => {
        tempQuery['$or'].push({ [filter]: { $ne: null } });
      });
      query = query.find(tempQuery);
    }
  }
  if (sort && ['createdAt', 'likes'].includes(sort)) {
    query = query.sort({ [sort]: 'desc' });
  }
  return query
};
