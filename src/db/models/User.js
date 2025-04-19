import { Schema, model } from 'mongoose';

import { handleSaveError, setUpdateSettings } from './hooks';
import { emailRegexp } from '../../constants/auth';

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, match: emailRegexp, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
);

userSchema.post('save', handleSaveError);

userSchema.pre('findOneAndUpdate', setUpdateSettings);

userSchema.post('findOneAndUpdate', handleSaveError);

const UserCollection = model('user', userSchema);

export default UserCollection;
