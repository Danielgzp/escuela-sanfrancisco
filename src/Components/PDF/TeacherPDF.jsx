import {
  Document,
  Image,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const StaffPDF = ({ profile }) => {
  const {
    name,
    lastName,
    ci,
    birthDate,
    birthPlace,
    admissionDate,
    gender,

    eventualities,
    address,
    grade,
  } = profile;

  const styles = StyleSheet.create({
    // page: { width: "90", height: "90%" },
    fullContainer: { width: "90%", height: "90%", margin: "0 auto" },
    formData: {
      fontSize: "22",
    },
    pdfTitle: {
      fontSize: 24,
      color: "blue",
    },
    header: {
      width: "100%",
      margin: "25 auto",
      border: "2 black solid",
      borderRadius: 25,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    leftHeader: {
      textAlign: "center",
      padding: "5 10",
      width: "50%",
    },
    rightHeader: {
      padding: "5 10",
      width: "50%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    firstTitle: {
      marginTop: 15,
      marginBottom: 15,
      width: "auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "left",
    },
    title: {
      fontSize: 10,
      textTransform: "uppercase",
      color: "black",
      fontWeight: "bold",
      padding: "4 8",
      border: "2px solid black",
      borderRadius: 25,
    },
    numberTitle: {
      fontSize: 10,
      border: "2px solid black",
      borderRadius: "50%",
      padding: 3,
      width: "20px",
      height: "20px",
      textAlign: "center",
      verticalAlign: "center",
    },
    separatorImg: {
      width: "20px",
      height: "20px",
      marginTop: 0,
      marginLeft: "-2px",
      marginRight: "-2px",
    },
    studentInfo: {
      border: "2 grey solid",
      /* borderRadius: 5, */
      boxShadow: "6px 9px 2px 1px black",
      width: "100%",
    },
    represetantInfo: {
      border: "2 grey solid",
      /* border-radius: 5, */
      boxShadow: "6px 9px 2px 1px black",
      width: "100%",
    },
    eventualities: {
      border: "2 grey solid",
      /* border-radius: 5, */
      boxshadow: "6px 9px 2px 1px black",
      width: "100%",
    },
    row: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      borderBottom: "2 solid black",
    },
    rowNoBorder: {
      borderBottom: "none",
    },
    columnNoBorder: {
      borderRight: "none !important",
    },
    column: {
      display: "flex",
      justifyContent: "left",
      alignItems: "left",
      flexDirection: "column",
      paddingLeft: 5,
      borderRight: "2 solid black",
    },
    columnTitle: {
      fontSize: 10,
      padding: "4px",
    },
    columnText: {
      fontSize: 8,
      padding: "4px 4px",
    },
    topColumn: {
      fontStyle: "italic",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.fullContainer}>
          <View style={styles.header}>
            <View style={styles.leftHeader}>
              <Text
                style={{
                  color: "grey",
                  textAlign: "center",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                FORMATO
              </Text>
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "bold",
                  // marginBottom: "5px",
                  // marginTop: "5px",
                }}
              >
                PERFIL DEL ESTUDIANTE
              </Text>
              <Text
                style={{ color: "grey", textAlign: "center", fontSize: "8px" }}
              >
                Algo mas
              </Text>
            </View>
            <View style={styles.rightHeader}>
              <Image
                src="/images/LogoSanFrancisco.png"
                alt="Logo de Fe y Alegria"
                style={{ width: "90%", height: "auto" }}
              ></Image>
            </View>
          </View>
          <View style={styles.firstTitle}>
            <Text style={styles.numberTitle}>1</Text>
            <Image
              src="/images/verticalLine.png"
              alt="Linea"
              style={styles.separatorImg}
            />
            <Text style={styles.title}>Datos Personales</Text>
          </View>
          <View style={styles.studentInfo}>
            <View style={[styles.firstRow, styles.row]}>
              <View style={[{ width: "35%" }, styles.column]}>
                <View style={[styles.topColumn1, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Nombres</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>{name}</Text>
                </View>
              </View>
              <View style={[{ width: "35%" }, styles.column]}>
                <View style={[styles.topColumn2, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Apellidos</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>{lastName}</Text>
                </View>
              </View>
              <View
                style={[styles.column, styles.columnNoBorder, { width: "30%" }]}
              >
                <View style={[styles.topColumn3, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Cedula</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>{ci}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.secondRow, styles.row]}>
              <View style={[{ width: "60%" }, styles.column]}>
                <View style={[styles.topColumn1, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Dirección</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>{address}</Text>
                </View>
              </View>
              <View
                style={[{ width: "40%" }, styles.column, styles.columnNoBorder]}
              >
                <View style={[styles.topColumn2, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Fecha de Nacimiento</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>{birthDate}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.thirdRow, styles.row, styles.rowNoBorder]}>
              <View style={[{ width: "20%" }, styles.column]}>
                <View style={[styles.topColumn1, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Sexo</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>{gender}</Text>
                </View>
              </View>
              <View style={[{ width: "20%" }, styles.column]}>
                <View style={[styles.topColumn2, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Fecha de Ingreso</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>{admissionDate}</Text>
                </View>
              </View>
              <View style={[{ width: "20%" }, styles.column]}>
                <View style={[styles.topColumn2, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Lugar de Nacimiento</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>{birthPlace}</Text>
                </View>
              </View>
              <View
                style={[{ width: "20%" }, styles.column, styles.columnNoBorder]}
              >
                <View style={[styles.topColumn2, styles.topColumn]}>
                  <Text style={styles.columnTitle}>
                    Grado al cual imparte clase:{" "}
                  </Text>
                </View>
                <View>
                  <Text style={styles.columnText}>
                    {grade.name} {grade.section}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.firstTitle}>
            <Text style={styles.numberTitle}>2</Text>
            <Image
              src="/images/verticalLine.png"
              alt="Linea"
              style={styles.separatorImg}
            />
            <Text style={styles.title}>Eventualidades</Text>
          </View>
          {eventualities ? (
            <>
              {eventualities?.map((eventualities) => (
                <View style={styles.eventualities} key={eventualities.id}>
                  <View style={[styles.firstRow, styles.row]}>
                    <View
                      style={[
                        styles.column,
                        styles.columnNoBorder,
                        { width: "100%" },
                      ]}
                    >
                      <Text style={styles.columnTitle}>
                        {eventualities.title} - {eventualities.day}
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.secondRow, styles.row]}>
                    <View
                      style={[
                        styles.column,
                        styles.columnNoBorder,
                        { width: "100%" },
                      ]}
                    >
                      <Text style={styles.columnText}>
                        {eventualities.description}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </>
          ) : (
            <View style={styles.noEventualities}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontStyle: "italic",
                }}
              >
                El Staff no presenta eventualidades que mostrar
              </Text>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default StaffPDF;