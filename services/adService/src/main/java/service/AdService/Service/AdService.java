package service.AdService.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.AdService.Repo.AdRepo;
import service.AdService.model.Ad;

import java.util.List;

@Service
public class AdService {

    @Autowired
    AdRepo adRepo;

    public List<Ad> findAll() {
        return  adRepo.findAll();
    }

    public Ad save(Ad c)
    {
        return  adRepo.save(c);
    }

    public boolean addAd(Ad c){

        List<Ad> tmp = findAll();
        if(tmp.size() == 0)
        {
            adRepo.save(c);
            return true;
        }
        for(Ad c1 : tmp)
            if(c1.getAdName().equals(c.getAdName()))
            {
                return  false;
            }
            else
            {
                adRepo.save(c);
                return true;
            }

        return false;

    }

    public Ad getAd(String adName){
        List<Ad> tmp = findAll();
        if(tmp.size() == 0)
            return null;

        for(Ad c : tmp)
        {
            System.out.println(c.toString());
            if(c.getAdName() == null)
                return null;
            if(c.getAdName().equals(adName))
                return c;
        }

        return null;
    }
}
