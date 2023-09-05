const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
  call: [
    {
      from: {
        type: String
      },
      to: {
        type: String
      },
      // type: Schema.Types.ObjectId
      call_id: {
        type: String
      },
      last_call: {
        type: String
      },
      call_summary: {
        type: String
      },
      Actionable_item: {
        type: String
      },
      AI_Bites: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model('post', CalendarSchema);
