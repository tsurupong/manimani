import * as path from 'path';
import { tokenize, Mora } from 'manimani';

const dic = path.join(__dirname, '..', 'src', 'dict');

tokenize(dic, '柿の種', (err: Error | null, moras?: Mora[]) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(JSON.stringify(moras, null, 2));
});
