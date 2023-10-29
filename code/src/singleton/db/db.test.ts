import { DB } from "./db";


describe('db', () => {
    it('should be able to instantiate only one', () => {
        const db = DB.getInstance();
        db.id = 1;

        const db2 = DB.getInstance();

        expect(db2.id).toBe(1);

        for (let i = 0; i < 5; i++) {
            expect(db2.connect()).toEqual(true);
        }
        expect(db2.connect()).toEqual(false);
    });
});