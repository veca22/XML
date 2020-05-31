package service.AdService.dto;

public class AdFilterDTO {
    private String startDate;
    private String endDate;
    private String place;

    public AdFilterDTO(String startDate, String endDate, String place) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.place = place;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }
}
