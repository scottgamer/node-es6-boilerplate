jest.mock("axios");

import axios from "axios";
import * as Service from "../../http/services/jsonPlaceholderService";

describe("JsonPlaceHolder tests", () => {
  test("should retrieve all users", async () => {
    const users = [
      {
        id: 1,
        username: "admin"
      },
      {
        id: 2,
        username: "richard"
      }
    ];
    const resp = {data: users};
    (axios as any).get.mockImplementation(() => Promise.resolve(resp));
    const result = await Service.getUsers();
    expect(result).toEqual(resp);
  });

  // TODO: add test for HTTP 500 Errors
  
  // test("an invalid non-json response", async () => {
  //   (axios as any).get.mockImplementation(() => "Service Unavailable.");
  //   await expect(Service.getUsers()).rejects.toThrow(SyntaxError);
  // });
});
