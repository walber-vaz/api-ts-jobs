import { DataTypes, type ModelDefined, type Optional } from 'sequelize';

import { type Job } from '../../types/Jobs';
import db from './index';

export type JobAttributes = Optional<Job, 'id'>;
type JobSequelizeModelCreate = ModelDefined<Job, JobAttributes>;

const JobModel: JobSequelizeModelCreate = db.define(
  'Job',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    company: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    salary: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    languages: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    tableName: 'jobs',
    underscored: true,
  },
);

export default JobModel;
