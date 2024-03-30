import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { useGetPostsByIdQuery } from "../redux/postsSlice";

function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const [postId, setPostId] = useState(1);
  const { data, isLoading, isError } = useGetPostsByIdQuery(postId);

  const handleInputChange = (e) => {
    setPostId(parseInt(e.target.value));
  };

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increase by 1</button>
      <button onClick={() => dispatch(decrement())}>Decrease by 1</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Increase by 10</button>
      <button onClick={() => dispatch(incrementByAmount(-10))}>Decrease by 10</button>

      <div>
        <input
          type="number"
          value={postId}
          onChange={handleInputChange}
          placeholder="Enter post ID"
        />
        {data && (
          <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Counter;
