export interface Iregister {
    FirstName: string;
    LastName: string;
    MobileNo: string;
    EmailId: string;
    UserLogin: {
        UserName: string;
        Password: string;
    }
};

export interface Ilogin {
    UserLogin: {
        UserName: string;
        Password: string;
    }
}