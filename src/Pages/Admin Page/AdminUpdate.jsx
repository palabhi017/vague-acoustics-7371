import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Box, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
const AdminUpdate = () => {
  return (
    <div>
      <AdminNavbar />
      <br />
      <br />
      <br />
      <Box style={{ width: "50%", margin: "auto" }}>
        <FormControl>
          <FormLabel> ₹Price</FormLabel>
          <Input type="number" />
          <FormHelperText>You can change Price.</FormHelperText>
          <FormLabel>Title</FormLabel>
          <Input type="text" />
          <FormHelperText>Change title here of Product.</FormHelperText>
        </FormControl>
        <br />
        <br />
        <br />
      </Box>
    </div>
  );
};

export default AdminUpdate;