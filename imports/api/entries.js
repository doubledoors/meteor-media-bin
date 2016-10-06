import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Entries = new Mongo.Collection('entries');

Meteor.methods({
  'entries.insert'(yt_video_id) {
    check(yt_video_id, String);
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Entries.insert({
      yt_video_id,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'entries.remove'(entryId) {
    check(entryId, String);
 
    Entries.remove(entryId);
  },
});