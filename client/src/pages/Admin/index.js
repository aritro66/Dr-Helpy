import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserList, UnBlockUser, BlockUser } from "../../actions/usersactions";
import User from "../../components/Admin/User";

export default function Admin() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.adminreducer?.data);
  useEffect(() => {
    dispatch(UserList());
  }, []);

  const handleBlock = (id) => {
    dispatch(BlockUser(id));
  };

  const handleUnBlock = (id) => {
    dispatch(UnBlockUser(id));
  };
  console.log(data);
  return (
    <>
      <section
        className="h-100"
        style={{ backgroundColor: "#eee", minHeight: "100vh" }}
      >
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div>
                <h3 className="display-5 mb-4 text-black">Admin</h3>
              </div>
              {!data ? (
                <p>No users registered</p>
              ) : (
                <table className="table table-striped display-6">
                  <thead>
                    <tr>
                      <th scope="col">Sno.</th>
                      <th scope="col">Name</th>
                      <th scope="col">email</th>
                      <th scope="col">Block/Unblock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((ele, index) => {
                      return (
                        <User
                          index={index}
                          user={ele}
                          handleBlock={handleBlock}
                          handleUnBlock={handleUnBlock}
                        />
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
