import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer dAAyK8QEvRTP4A97DkNmdrtwgf-H7SF6u4Z0L7isNtlzMIoKJU8B6Wjqz4VNjRQvfkJO1uqYj142NbopxKOp_PevXa9brBxinbuoRXznO-ORKVpljgjQJvP_YhCHX3Yx'
    }
});


