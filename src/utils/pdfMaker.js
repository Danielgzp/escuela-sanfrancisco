import { Document, Image, Page, Text, View } from "@react-pdf/renderer";

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

  console.log(profile);
  console.log(record);
  return (
    <Document>
      <Page size="A4">
        <View>
          <View className="row">
            <View className="col-xl-12 col-xxl-12 col-sm-12">
              <View className="card">
                <View className="card-header">
                  <Text className="card-title">Información Básica</Text>
                </View>
                <View className="card-body">
                  <View className="row">
                    <View className="col-lg-6 col-md-6 col-sm-12">
                      <View className="form-group">
                        <Text className="form-label">Nombres</Text>

                        <Text className="form-control">{name}</Text>
                      </View>
                    </View>
                    <View className="col-lg-6 col-md-6 col-sm-12">
                      <View className="form-group">
                        <Text className="form-label">Apellidos</Text>
                        <Text className="form-control">{lastName}</Text>
                      </View>
                    </View>
                    <View className="col-lg-6 col-md-6 col-sm-12">
                      <View className="form-group">
                        <Text className="form-label">
                          Cedula de Identidad Escolar
                        </Text>
                        <Text name="schoolId">{ci}</Text>
                      </View>
                      <View className="col-lg-6 col-md-6 col-sm-12">
                        <View className="form-group">
                          <Text className="form-label">Direccion</Text>
                          <Text className="form-control">{address}</Text>
                        </View>
                      </View>
                      <View className="col-lg-6 col-md-6 col-sm-12">
                        <View className="form-group">
                          <Text className="form-label">Fecha de Ingreso</Text>
                          <Text className="datepicker-default form-control">
                            {admissionDate}
                          </Text>
                        </View>
                      </View>
                      <View className="col-lg-6 col-md-6 col-sm-12">
                        <View className="form-group">
                          <Text className="form-label">
                            Fecha de nacimiento
                          </Text>
                          <Text className="datepicker-default form-control">
                            {birthDate}
                          </Text>
                        </View>
                      </View>
                      <View className="col-lg-6 col-md-6 col-sm-12">
                        <View className="form-group">
                          <Text className="form-label">
                            Lugar de Nacimiento
                          </Text>
                          <Text className="form-control">{birthPlace}</Text>
                        </View>
                      </View>
                      <View className="col-lg-6 col-md-6 col-sm-12">
                        <View className="form-group">
                          <Text className="form-label">Grado</Text>
                          <Text className="form-control">
                            {grade.name} Seccion {grade.section}
                          </Text>
                        </View>
                      </View>
                      <View className="col-lg-6 col-md-6 col-sm-12">
                        <View className="form-group">
                          <Text className="form-label">Género</Text>
                          <Text className="form-control">{grade.gender}</Text>
                        </View>
                      </View>
                      <View className="col-lg-6 col-md-6 col-sm-12">
                        <View className="form-group">
                          <Text className="form-label">
                            Condición de la vivienda
                          </Text>
                          <Text className="form-control">{houseProperty}</Text>
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
        </View>
      </Page>
    </Document>
  );
};

export default MakePDF;
