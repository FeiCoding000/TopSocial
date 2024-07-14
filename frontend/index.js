import './index.css';
import {getDatabase} from '@/js/database/database.js';

import { getPath } from "@/js/database/utils.js";
const path=getPath();
console.log(path);

getDatabase();