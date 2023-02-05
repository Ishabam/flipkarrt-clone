import mongoose from 'mongoose';

const Connection = async(username, password) => {
    const url = `mongodb+srv://${username}:${password}@cluster0.esu4e.mongodb.net/FLIPKARTBYISHA?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(url);
        console.log('Connection Successfull');
    }catch(e){
        console.log('problem while connecting to database', e);
    }
};

export default Connection;