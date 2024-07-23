import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoadingUsers(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoadingUsers(false);
      });

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoadingPosts(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoadingPosts(false);
      });


      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoadingPosts(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoadingPosts(false);
      });



  }, []);

  if (loadingUsers || loadingPosts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h1>Post List</h1>
      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
