import bcrypt from "bcryptjs"


const users = [
    {
        email: 'shivam@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        email: 'shivamdamre@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        email: 'damre@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users