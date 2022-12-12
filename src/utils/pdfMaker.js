import {
  Document,
  Image,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const MakePDF = ({ profile }) => {
  const {
    name,
    lastName,
    ci,
    birthDate,
    birthPlace,
    admissionDate,
    houseProperty,
    gender,
    grade,
    address,
    gradeId,
    record,
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

  console.log(profile);
  console.log(record);
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
                Ficha estudiantil
              </Text>
            </View>
            <View style={styles.rightHeader}>
              <Image
                src="https://ipysvenezuela.org/wp-content/uploads/2017/09/vista-prc3a8via-de-e2809clogofyabuenaresolucic3b3n-tife2809d-cc3b2pia.jpg"
                alt="Logo de Fe y Alegria"
                style={{ width: "50%", height: "auto" }}
              ></Image>
              <Text
                style={{
                  color: "grey",
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "bold",
                  width: "50%",
                }}
              >
                U.E.C Fe y Alegría San Francisco
              </Text>
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
                  <Text style={styles.columnTitle}>Cedula Escolar</Text>
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
              <View style={[{ width: "20%" }, styles.column]}>
                <View style={[styles.topColumn2, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Tipo de Propiedad</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>{houseProperty}</Text>
                </View>
              </View>
              <View
                style={[{ width: "20%" }, styles.column, styles.columnNoBorder]}
              >
                <View style={[styles.topColumn2, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Grado</Text>
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
            <Text style={styles.title}>Datos del Representante</Text>
          </View>
          <View style={styles.represetantInfo}>
            <View style={[styles.firstRow, styles.row]}>
              <View style={[{ width: "40%" }, styles.column]}>
                <View style={[styles.topColumn1, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Nombres</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>c</Text>
                </View>
              </View>
              <View style={[{ width: "40%" }, styles.column]}>
                <View style={[styles.topColumn2, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Apellidos</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>bdsa</Text>
                </View>
              </View>
              <View
                style={[styles.column, styles.columnNoBorder, { width: "20%" }]}
              >
                <View style={[styles.topColumn3, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Cedula</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>10323452</Text>
                </View>
              </View>
            </View>
            <View style={[styles.secondRow, styles.row, styles.rowNoBorder]}>
              <View style={[{ width: "50%" }, styles.column]}>
                <View style={[styles.topColumn1, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Correo</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum
                  </Text>
                </View>
              </View>
              <View
                style={[{ width: "50%" }, styles.column, styles.columnNoBorder]}
              >
                <View style={[styles.topColumn2, styles.topColumn]}>
                  <Text style={styles.columnTitle}>Telefono</Text>
                </View>
                <View>
                  <Text style={styles.columnText}>0414102534</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.firstTitle}>
            <Text style={styles.numberTitle}>3</Text>
            <Image
              src="/images/verticalLine.png"
              alt="Linea"
              style={styles.separatorImg}
            />
            <Text style={styles.title}>Eventualidades</Text>
          </View>
          {record ? (
            <>
              {record?.map((records) => (
                <View style={styles.eventualities} key={records.id}>
                  <View style={[styles.firstRow, styles.row]}>
                    <View
                      style={[
                        styles.column,
                        styles.columnNoBorder,
                        { width: "100%" },
                      ]}
                    >
                      <Text style={styles.columnTitle}>
                        {records.title} - {records.day}
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
                        {records.description}
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
                El Estudiante no presenta eventualidades que mostrar
              </Text>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default MakePDF;

{
  /* <View>
  <View style={styles.">
    <View style={styles.">
      <View style={styles.">
        <View style={styles.pdfTitle}>
          <Text style={styles." tyle={styles.pdfTitle}>
            Información Básica
          </Text>
        </View>
        <View style={styles.personalInfo">
          <View style={styles.">
            <View style={styles.">
              <View style={styles.">
                <Text style={styles.formData}>Nombres</Text>

                <Text style={styles.formData">{name}</Text>
              </View>
            </View>
            <View style={styles.">
              <View style={styles.">
                <Text style={styles.">Apellidos</Text>
                <Text style={styles.">{lastName}</Text>
              </View>
            </View>
            <View style={styles.">
              <View style={styles.">
                <Text style={styles.">Cedula de Identidad Escolar</Text>
                <Text name="schoolId">{ci}</Text>
              </View>
              <View style={styles.">
                <View style={styles.">
                  <Text style={styles.">Direccion</Text>
                  <Text style={styles.">{address}</Text>
                </View>
              </View>
              <View style={styles.">
                <View style={styles.">
                  <Text style={styles.">Fecha de Ingreso</Text>
                  <Text style={styles.datepicker-default ">{admissionDate}</Text>
                </View>
              </View>
              <View style={styles.">
                <View style={styles.">
                  <Text style={styles.">Fecha de nacimiento</Text>
                  <Text style={styles.datepicker-default ">{birthDate}</Text>
                </View>
              </View>
              <View style={styles.">
                <View style={styles.">
                  <Text style={styles.">Lugar de Nacimiento</Text>
                  <Text style={styles.">{birthPlace}</Text>
                </View>
              </View>
              <View style={styles.">
                <View style={styles.">
                  <Text style={styles.">Grado</Text>
                  <Text style={styles.">
                    {grade.name} Seccion {grade.section}
                  </Text>
                </View>
              </View>
              <View style={styles.">
                <View style={styles.">
                  <Text style={styles.">Sexo</Text>
                  <Text style={styles.">{grade.gender}</Text>
                </View>
              </View>
              <View style={styles.">
                <View style={styles.">
                  <Text style={styles.">Condición de la vivienda</Text>
                  <Text style={styles.">{houseProperty}</Text>
                </View>
              </View>
            </View>
            <View>
              <Text>Eventualidades</Text>
              {record ? (
                <>
                  {record?.map((records) => (
                    <View key={records.id}>
                      <View>
                        <Text>
                          {records.title} - {records.day}
                        </Text>
                      </View>
                      <View>
                        <Text>{records.description}</Text>
                      </View>
                    </View>
                  ))}
                </>
              ) : (
                <View>
                  <Text>No tiene Evenetualidades Registradas</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
</View>; */
}
