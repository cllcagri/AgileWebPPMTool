package io.growbymastery.ppmtool.services;

import io.growbymastery.ppmtool.domain.Backlog;
import io.growbymastery.ppmtool.domain.Project;
import io.growbymastery.ppmtool.domain.ProjectTask;
import io.growbymastery.ppmtool.exceptions.ProjectNotFoundException;
import io.growbymastery.ppmtool.repositories.BacklogRepository;
import io.growbymastery.ppmtool.repositories.ProjectRepository;
import io.growbymastery.ppmtool.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {
    @Autowired
    BacklogRepository backlogRepository;

    @Autowired
    ProjectTaskRepository projectTaskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask){
        try{
            //PTs to be added to a specific project , project != null, backlog exist
            Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
            projectTask.setBacklog(backlog);     //set the backlog to PT
            Integer BacklogSequence = backlog.getPTSequence(); //project sequence be like : IDPRO-1 , IDRPRO-2
            BacklogSequence = BacklogSequence + 1;  //update the BL Sequence
            backlog.setPTSequence(BacklogSequence);
            projectTask.setProjectSequence(projectIdentifier + "-" + BacklogSequence);  //Add Sequence to Project Task
            projectTask.setProjectIdentifer(projectIdentifier);
            //INITIAL priority when priority is null
            if(projectTask.getPriority() == null){
                projectTask.setPriority(3);
            }
            //INITIAL status when status is null
            if(projectTask.getStatus() == "" || projectTask.getStatus() == null){
                projectTask.setStatus("TO_DO");
            }
            return projectTaskRepository.save(projectTask);
        }catch (Exception e){
            throw new ProjectNotFoundException("Project Not Found !!");
        }
    }

    public Iterable<ProjectTask>findBacklogById(String id){
        Project project = projectRepository.findByProjectIdentifier(id);
        if(project == null) throw new ProjectNotFoundException("Project with id :" + id + " is not exist !");
        return  projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }


    public ProjectTask findPTBySequence(String backlogId, String ptId){
        Backlog backlog = backlogRepository.findByProjectIdentifier(backlogId);
        if(backlog == null) throw new ProjectNotFoundException("Project with ID " + backlogId + " not found.");

        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(ptId);
        if(projectTask == null) throw new ProjectNotFoundException("Project Task with ID " + ptId + " not found.");

        if(!projectTask.getProjectIdentifer().equals(backlogId)){
            throw new ProjectNotFoundException("PT Id and Project does not match");
        }

        return projectTask;
    }
}
