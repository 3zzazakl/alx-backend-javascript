import { RowID, RowElement } from './interface';
import * as crud from './crud';

const row: RowElement = {
    firstname: 'Guillaume',
    lastname: 'Salva',
};

const newRowID: RowID = crud.insertRow(row);
const updateRow: RowElement = { ...row, age: 23 };

crud.updateRow(newRowID, updateRow);
crud.deleteRow(newRowID);
