export const ACTION_TYPES = {
  GET_PHOTOS: "GET_PHOTOS",
  GET_PHOTO: "GET_PHOTO",
  UPDATE_PHOTO: "UPDATE_PHOTO",
  DELETE_PHOTO: "DELETE_PHOTO",
  CREATE_PHOTO_GROUP: "CREATE_PHOTO_GROUP",
  CREATE_PHOTO_COSTUME: "CREATE_PHOTO_COSTUME",
  CREATE_PHOTO_ADD_MEMBER: "CREATE_PHOTO_ADD_MEMBER",
  CREATE_PHOTO_DEL_MEMBER: "CREATE_PHOTO_DEL_MEMBER",
  CREATE_PHOTO_TYPE_NUMBER: "CREATE_PHOTO_TYPE_NUMBER",
  CREATE_PHOTO_TYPE_CURR_SELECTED_MEM_TYPE: "CREATE_PHOTO_TYPE_CURR_SELECTED_MEM_TYPE",
};

export const STORE_TYPES = {
  STATE: {
    TOP: {
      META: "top",
      PHOTOS: "photos"
    },
    CREATE: {
      META: "create",
      GROUP: "group",
      COSTUME: "costume",
      MEMBER: "member",
      NUMBER: "number",
      CURR_SELECTED_MEM_TYPE: "curr_selected_member_type",
    }
  }
};

export const END_POINTS = {
  PHOTO: "/photos/all"
};
