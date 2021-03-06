import dummyData from '../models/dummyData';


export default class entriesHelper {
  static getAllEntries() {
    return new Promise((resolve, reject) => {
      const data = dummyData.entries;
      if (data) {
        resolve(data);
      } else {
        reject({
          message: 'Request unsuccessful',
        });
      }
    });
  }

  static getDiaryEntryById(entryId) {
    return new Promise((resolve, reject) => {
      const data = dummyData.entries[entryId];
      if (data) {
        resolve(data);
      } else {
        reject({
          message: 'Diary entry cannot be found',
        });
      }
    });
  }

  static addNewDiaryEntry(date, time, userId, title, description) {
    return new Promise((resolve, reject) => {
      dummyData.entries.push({
        date,
        time,
        userId,
        title,
        description,
      });
      const data = dummyData.entries[dummyData.entries.length - 1];
      if (data) {
        resolve(data);
      } else {
        reject({
          message: 'Sorry, New diary entry cannot be created',
        });
      }
    });
  }

  static updateDiaryEntry(id, update) {
    return new Promise((resolve, reject) => {
      const existingEntry = dummyData.entries[id];
      const updatedData = Object.assign(existingEntry, update);
      if (updatedData) {
        dummyData.entries[id] = updatedData;
        resolve(updatedData);
      } else {
        reject({
          message: 'Sorry, diary entry cannot be updated',
        });
      }
    });
  }
}
