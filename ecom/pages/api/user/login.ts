import nc from 'next-connect'
import User from '../../../models/UserModel';
import db from '../../../utils/db';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const handler = nc();

