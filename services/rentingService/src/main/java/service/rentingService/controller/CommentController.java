package service.rentingService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.rentingService.model.Comment;
import service.rentingService.service.CommentService;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping(value = "/accountOperationForComment")
    public ResponseEntity<Comment> operations (@RequestParam(value = "operation", required = true) String operation,
                                               @RequestParam(value = "id", required = true) String id) {
        System.out.println("dosao na back u operacije");

        System.out.println(id);
        Long lid = Long.parseLong(id);
        Comment comment = commentService.findCommentById(lid);
        // System.out.println(user.getEmail() + " adresa usera za operacije");
        if(operation.equals("АCCEPTED")) {
            comment.setApproved(true);
            commentService.save(comment);
            return new ResponseEntity<>(comment, HttpStatus.OK);
        } else if(operation.equals("BLOCKED")) {
            comment.setApproved(false);
            commentService.save(comment);
            return new ResponseEntity<>(comment, HttpStatus.OK);
        }

        return new ResponseEntity<>(comment, HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/allCommentsForOperation")
    public ResponseEntity<List<Comment>> allCommentsForOperation() {
        System.out.println("dosao na back");
        List<Comment> pom = commentService.findAll();
        List<Comment> ret = new ArrayList<>();
        for(Comment c : pom) {
            if(!c.isApproved()) {
                ret.add(c);
                System.out.println(c.toString());
            }
        }
        System.out.println("dosao na back posle fora");

        return new ResponseEntity<>(ret, HttpStatus.OK);
    }
}
