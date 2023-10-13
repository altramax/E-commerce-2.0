// import { CSVLink } from "react-csv";
import { MdCloudDownload } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { Fragment } from "react";
// import { PDFViewer } from "@react-pdf/renderer";
import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";

type propstype = {
  firstName: string | undefined;
  lastName: string | undefined;
  delivery: string | undefined;
  subtotal: any;
};

type receipttype = {
  firstname: string | undefined;
  lastname: string | undefined;
  address: string | undefined;
  cost: string | undefined;
};

export default function Confirm(props: propstype) {

  return (
    <Fragment>
      <div className="ConfirmOrder">
        <GiCheckMark size={30} color="green" />
        <h3>Name</h3>
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
        <div>
          <h3>Delivery Address</h3>
          <p>{props.delivery}</p>
        </div>
        <div>
          <h3>Payment Method</h3>
          <p>Payment On Delivery</p>
        </div>
        <div>
          <h3>SubTotal</h3>
          <p>${props.subtotal}</p>
        </div>
        <div id="downloadButton">
          <PDFDownloadLink
            document={
              <Receipt
                firstname={props.firstName}
                lastname={props.lastName}
                address={props.delivery}
                cost={props.subtotal}
              />
            }
            fileName="Receipt"
            onClick={() => {
              window.location.replace("/");
              window.location.reload();
            }}
          >
          <MdCloudDownload size={30} color="white" />
          </PDFDownloadLink>
        </div>
      </div>
    </Fragment>
  );
}

function Receipt(props: receipttype) {
  const styles = StyleSheet.create({
    title: {
      paddingTop: 10,
      paddingLeft: 10,
      fontSize: 24,
      color: "#e80582"
    },
    header: {
      paddingTop: 5,
      paddingLeft: 10,
      fontSize: 18,
    },
    body: {
      paddingBottom: 5,
      paddingTop: 5,
      paddingLeft: 10,
      fontSize: 14,
    },
  });
  return (
    <>
      <Document>
        <Page>
          <Text style={styles.title}>Receipt</Text>
          <Text style={styles.header}>Name</Text>
          <Text style={styles.body}>{props.firstname} {props.lastname}</Text>
          <Text style={styles.header}>Address</Text>
          <Text style={styles.body}>{props.address}</Text>
          <Text style={styles.body}>SubTotal  ${props.cost}</Text>
        </Page>
      </Document>
    </>
  );
}
