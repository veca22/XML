package service.AdService.model;

import java.io.Serializable;
import java.util.List;

public class Image implements Serializable {
    private String idOglasa;
    private List<String> fileSource;
    private static final long serialVersionUID = 1L;

    public Image() {
    }

    public String getIdOglasa() {
        return idOglasa;
    }

    public void setIdOglasa(String idOglasa) {
        this.idOglasa = idOglasa;
    }

    public List<String> getFileSource() {
        return fileSource;
    }

    public void setFileSource(List<String> fileSource) {
        this.fileSource = fileSource;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }
}
