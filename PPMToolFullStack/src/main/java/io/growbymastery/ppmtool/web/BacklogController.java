package io.growbymastery.ppmtool.web;


import io.growbymastery.ppmtool.domain.ProjectTask;
import io.growbymastery.ppmtool.services.MapValidationErrorService;
import io.growbymastery.ppmtool.services.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("/{backlogId}")
    public ResponseEntity<?> addPTtoBacklog(@Valid @RequestBody ProjectTask projectTask,
                                            BindingResult bindingResult, @PathVariable String backlogId){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(bindingResult);
        if(errorMap != null){
            return errorMap;
        }
        ProjectTask task = projectTaskService.addProjectTask(backlogId, projectTask);
        return new ResponseEntity<>(task, HttpStatus.CREATED);
    }

    @GetMapping("/{backlogId}")
    public Iterable<ProjectTask> getProjectBacklog(@PathVariable String backlogId){
        return projectTaskService.findBacklogById(backlogId);
    }

    @GetMapping("/{backlogId}/{ptId}")
    public ResponseEntity<?> getProjectTask(@PathVariable String backlogId, @PathVariable String ptId){
        ProjectTask projectTask = projectTaskService.findPTBySequence(backlogId, ptId);
        return new ResponseEntity<>(projectTask, HttpStatus.OK);
    }


}
