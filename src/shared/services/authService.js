import axiosClient from "./axiosClient.js";

export const auth = {
  login: async ({ email, password }) => {
    const res = await axiosClient.get("/systemAccounts", {
      params: { AccountEmail: email },
    });

    const users = res.data;

    if (!users || users.length === 0) {
      throw new Error("Email không tồn tại");
    }

    const user = users[0];

    if (user.IsActive !== 1) {
      throw new Error("Tài khoản đã bị khóa");
    }

    if (user.AccountPassword !== password) {
      throw new Error("Sai mật khẩu");
    }

    return {
      user: {
        AccountID: user.AccountID,
        AccountName: user.AccountName,
        AccountEmail: user.AccountEmail,
        AccountRole: user.AccountRole,
      },
      accessToken: `FAKE_TOKEN_${user.AccountID}_${Date.now()}`,
    };
  },

  register: async (payload) => {
    /*
      payload:
      {
        AccountName,
        AccountEmail,
        AccountPassword
      }
    */

    const existed = await axiosClient.get("/systemAccounts", {
      params: { AccountEmail: payload.AccountEmail },
    });

    if (existed.data.length > 0) {
      throw new Error("Email đã tồn tại");
    }

    const newReader = {
      ...payload,
      AccountRole: "READER",
      IsActive: 1,
    };

    return axiosClient.post("/systemAccounts", newReader);
  },

  logout: async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  },
};
