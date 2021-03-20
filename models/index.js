const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');


// Create associations for Users to Posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Create reverse association for Posts to Users
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// Create associations for Users to Votes
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

// Creates associations for Votes to Users
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

    // Create associations for Vote to User by user id
    Vote.belongsTo(User, {
        foreignKey: 'user_id'
    });
  
    // Create associations for Vote to Post by post id
    Vote.belongsTo(Post, {
    foreignKey: 'post_id'
    });

    // Create associations for User to Vote by user id
    User.hasMany(Vote, {
    foreignKey: 'user_id'
    });

    // Create associations for Post to Vote by post id
    Post.hasMany(Vote, {
    foreignKey: 'post_id'
    });

module.exports = { User, Post, Vote };