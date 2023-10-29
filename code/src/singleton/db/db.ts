export class DB {
    

    // class member
    private static db:DB | undefined;

    public static getInstance(): DB {
        if (!DB.db){
            DB.db = new DB();
        }
        return DB.db;
    }

    // object member
    public id: number = 0;

    private constructor() {}

    private pool = 0 ;
    public connect(): boolean {
        if (this.pool >= 5) {
            return false;
        } 
        this.pool++
        return true;
    }
}