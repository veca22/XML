package com.agent.backend.services;

import com.agent.backend.model.TransmissionType;
import com.agent.backend.repository.TransmissionTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class TransmissionTypeService {

    @Autowired
    TransmissionTypeRepo transmissionTypeRepo;

    public List<TransmissionType> findall() { return transmissionTypeRepo.findAll(); }

    public TransmissionType findTransmissionTypeById(Long id) { return transmissionTypeRepo.findTransmissionTypeById(id);}

    public TransmissionType save(TransmissionType t) { return transmissionTypeRepo.save(t);}

    public boolean addTransmissionType(TransmissionType t){
        List<TransmissionType> tmp = findall();
        if(tmp.size() == 0){
            transmissionTypeRepo.save(t);
        }
        for(TransmissionType f1: tmp){
            if(f1.getId() == t.getId()){
                return  false;
            }
            else {
                transmissionTypeRepo.save(t);
                return true;
            }
        }
        return false;
    }

    public TransmissionType getTransmissionType(String serialNumber){
        List<TransmissionType> tmp = findall();
        if(tmp.size() == 0){
            return null;
        }
        for (TransmissionType f : tmp){
            if(f.getSerialNumber().equals(serialNumber)){
                return f;
            }
        }
        return null;
    }

    public TransmissionType findTransByType(String type) { return transmissionTypeRepo.findTransmissionTypeByType(type);}
}
